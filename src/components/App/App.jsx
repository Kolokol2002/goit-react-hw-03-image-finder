import { getPhotoApi } from 'api/pixabayApi';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import { Component } from 'react';
const PER_PAGE = 20;
class App extends Component {
  state = {
    image: [],
    text: '',
    page: 1,
    error: '',
    status: 'idle',
    ref: null,
    scrollTo: null,
  };

  componentDidUpdate(_, prevState) {
    const { page, text, image, ref } = this.state;

    if (page === 1) {
      return;
    }

    if (prevState.image !== image) {
      // console.log(1, page);
      const elementToScroll =
        ref.current.children[PER_PAGE * (prevState.page - 1)];

      elementToScroll.scrollIntoView({
        behavior: 'smooth',
      });
    }

    if (prevState.page !== page) {
      // console.log(2, page);
      this.setState({ status: 'pending' });

      getPhotoApi(text, page, PER_PAGE)
        .then(({ data: { hits } }) => {
          const status = hits.length < PER_PAGE ? 'idle' : 'resolved';
          this.setState({
            image: [...prevState.image, ...hits],
            status,
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  getRef = ref => {
    this.setState({ ref });
  };

  sendPhoto = text => {
    this.setState({ image: [], status: 'pending', page: 1 });

    getPhotoApi(text, 1, PER_PAGE)
      .then(({ data: { hits } }) => {
        if (hits.length === 0) {
          throw new Error('Картинок не знайдено');
        }
        const status = hits.length < PER_PAGE ? 'idle' : 'resolved';
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
    const { sendPhoto, loadMore, getRef } = this;

    return (
      <>
        <Searchbar sendPhoto={sendPhoto} />
        <ImageGallery image={image} getRef={getRef} />
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <Button onClick={loadMore} />}
        {status === 'rejected' && <h1>{error}</h1>}
      </>
    );
  }
}

export default App;
