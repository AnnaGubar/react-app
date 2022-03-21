//* компонент списка элементов

import Painting from './Painting'; // шабллон 1 эл
import PropTypes from 'prop-types';

function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>

          <Painting
            imageUrl={item.url}
            title={item.title}
            author={item.author.tag}
            profileUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />

        </li>
      ))}
    </ul>
  );
}

// PropTypes.arrayOf(PropTypes.shape()) - ожидает массив обьектов

// PaintingList использует только item.id, остальное проверяется в Painting

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default PaintingList;
