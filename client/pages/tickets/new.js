import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: {
      title,
      price,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = (event) => {
    event.preventDefault();

    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={onSubmit} className="form-class">
          <h1>Publish Item</h1>
          <div className="form-group">
            <div>
              <label>Title</label>
              <input className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input className="form-control"
                value={price}
                onBlur={onBlur}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label>Upload item image</label>
              <input type="file" className="form-control form-control-lg"/>
            </div>
          </div>
          {errors}
          <button className="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewTicket;
