import { getPhoto } from 'api/pixabayApi';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import { Component } from 'react';

// idle;
// pending;
// resolved;
// rejected;

class App extends Component {
  state = {
    image: [],
    text: '',
    page: 1,
    per_page: 20,
    // isVisible: false,
    // loader: false,
    error: '',
    status: 'idle',
  };

  componentDidUpdate(_, prevState) {
    const { page, text, per_page } = this.state;

    if (prevState.page !== page && page !== 1) {
      this.setState({ status: 'pending' });

      getPhoto(text, page, per_page)
        .then(({ data: { hits } }) => {
          const status = hits.length < per_page ? 'idle' : 'resolved';
          this.setState({
            image: [...prevState.image, ...hits],
            status,
          });

          setTimeout(() => {
            window.scrollTo({
              left: 0,
              top: document.body.scrollHeight,
              behavior: 'smooth',
            });
          }, 200);
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  sendPhoto = text => {
    const { per_page } = this.state;

    this.setState({ image: [], status: 'pending' });

    getPhoto(text, 1, per_page)
      .then(({ data: { hits } }) => {
        if (hits.length === 0) {
          throw new Error('Картинок не знайдено');
        }
        const status = hits.length < per_page ? 'idle' : 'resolved';
        this.setState({ image: hits, text, status });
      })
      .catch(({ message }) =>
        this.setState({ error: message, status: 'rejected' })
      );
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { image, status, error } = this.state;

    const { sendPhoto, loadMore } = this;
    return (
      <>
        <Searchbar sendPhoto={sendPhoto} />
        <ImageGallery image={image} />
        {status === 'resolved' && <Button onClick={loadMore} />}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h1>{error}</h1>}
      </>
    );
  }
}

export default App;
