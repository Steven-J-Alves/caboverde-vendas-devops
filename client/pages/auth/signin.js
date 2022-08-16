import { useState, useEffect } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password
    },
    onSuccess: () => Router.push('/')
  });

  const onSubmit = async event => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit} className="form-class">
        <h1>Login</h1>
        <div className="form-group">
          <div>
            <label>Email Address</label>
            <input className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </div>
        </div>
        {errors}
        <button  class="btn btn-dark">Sign In</button>
      </form>
    </div>
  );
};
