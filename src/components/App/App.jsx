import { getPhoto } from 'api/pixabayApi';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import { Component } from 'react';

class App extends Component {
  state = {
    image: [],
    text: '',
    page: 1,
    per_page: 20,
    isVisible: false,
    loader: false,
  };

  componentDidUpdate(_, prevState) {
    const { page, text, per_page } = this.state;

    if (prevState.page !== page && page !== 1) {
      this.setState({ isVisible: false, loader: true });
      getPhoto(text, page, per_page)
        .then(({ data: { hits } }) =>
          this.setState({ image: [...prevState.image, ...hits] })
        )
        .catch(console.log)
        .finally(() => {
          setTimeout(() => {
            window.scrollTo({
              left: 0,
              top: document.body.scrollHeight,
              behavior: 'smooth',
            });
          }, 200);
          this.setState({ isVisible: true, loader: false });
        });
    }
  }

  sendPhoto = text => {
    const { per_page } = this.state;

    this.setState({ image: [], isVisible: false, loader: true });

    getPhoto(text, 1, per_page)
      .then(({ data: { hits } }) => this.setState({ image: hits, text }))
      .catch(error => console.log(error))
      .finally(() => this.setState({ isVisible: true, loader: false }));
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isVisible, image, loader } = this.state;
    const { sendPhoto, loadMore } = this;
    return (
      <>
        <Searchbar sendPhoto={sendPhoto} />
        <ImageGallery image={image} />
        {isVisible && <Button onClick={loadMore} />}
        {loader && <Loader />}
      </>
    );
  }
}

export default App;
