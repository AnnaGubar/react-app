//* сборка основного компонента

import paintings from './paintings.json'; // коллекция эл-ов
import PaintingList from './components/PaintingList'; // передача пропсов с коллекции в компонент
import Section from './components/Section';

export default function App() {
  return (
    <div>
      {/* в секцию передаем заголовок и коллекцию компонентов */}
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>

      {/* в секцию передаем заголовок  */}
      <Section title="Лучшее"></Section>
    </div>
  );
}
