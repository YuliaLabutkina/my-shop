import { useState } from 'react';
import { useSelector } from 'react-redux';

import { getCard } from '../../redux/product/product-selector';
import {
  Container,
  Form,
  LabelForm,
  InputForm,
  Button,
} from './UserForm.style';

const UserForm = () => {
  const card = useSelector(getCard);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'telephone':
        setTelephone(value);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Form
        action={`https://formsubmit.co/${email}`}
        method="POST"
        message={JSON.stringify(card)}
      >
        <LabelForm>
          Name
          <InputForm
            onChange={handleChange}
            type="text"
            name={'name'}
            placeholder="Enter name"
            value={name}
            required
          />
        </LabelForm>
        <LabelForm>
          Telephone
          <InputForm
            onChange={handleChange}
            type="tel"
            name={'telephone'}
            placeholder="Enter telephone"
            value={telephone}
            required
          />
        </LabelForm>
        <LabelForm>
          E-mail
          <InputForm
            onChange={handleChange}
            type="email"
            name={'email'}
            placeholder="Enter e-mail"
            value={email}
            required
          />
        </LabelForm>
        <InputForm type="hidden" name="message" value={JSON.stringify(card)} />

        <Button type="submit">Place order</Button>
      </Form>
    </Container>
  );
};

export default UserForm;
