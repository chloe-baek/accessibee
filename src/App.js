import './App.css';
import Header from './components/Header';
import LeftV from './components/LeftV';
import RightV from './components/RightV';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-screen'>
      <Header />
      <RightV
        h3='Module1 or Main-Heading3'
        p=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            harum laudantium, necessitatibus beatae eaque ipsam illum molestiae
            laborum commodi enim explicabo dicta doloribus nulla aspernatur quae
            architecto asperiores sequi. Quaerat. Sequi veritatis consequatur
            exercitationem placeat aliquid vero minima quod vitae cumque,
            inventore iure voluptas cupiditate voluptatum incidunt ab dolor
            modi, nobis repellendus ullam? Ea voluptates ipsum accusantium
            delectus, voluptatem nostrum. Iure, vero nihil. Magni enim cumque
            repudiandae consectetur nemo totam autem consequatur soluta
            obcaecati sit incidunt reiciendis aperiam, amet quibusdam
            accusantium. Quasi ab nihil eveniet asperiores qui aliquid
            architecto voluptatibus?'
        video='video/sample.mp4'
      />
      <LeftV
        h3='Module1 or Main-Heading3'
        p=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            harum laudantium, necessitatibus beatae eaque ipsam illum molestiae
            laborum commodi enim explicabo dicta doloribus nulla aspernatur quae
            architecto asperiores sequi. Quaerat. Sequi veritatis consequatur
            exercitationem placeat aliquid vero minima quod vitae cumque,
            inventore iure voluptas cupiditate voluptatum incidunt ab dolor
            modi, nobis repellendus ullam? Ea voluptates ipsum accusantium
            delectus, voluptatem nostrum. Iure, vero nihil. Magni enim cumque
            repudiandae consectetur nemo totam autem consequatur soluta
            obcaecati sit incidunt reiciendis aperiam, amet quibusdam
            accusantium. Quasi ab nihil eveniet asperiores qui aliquid
            architecto voluptatibus?'
        video='video/sample.mp4'
      />
      <div id='module2' className='bg-[#EC7A7A] py-24 text-center'>
        <h2 className='font-bold text-6xl pb-4'>Module2</h2>
        <p className='font-medium text-lg font-serif'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          suscipit maiores deleniti iusto
        </p>
      </div>
      <RightV
        h3='Module2-Heading3'
        p=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            harum laudantium, necessitatibus beatae eaque ipsam illum molestiae
            laborum commodi enim explicabo dicta doloribus nulla aspernatur quae
            architecto asperiores sequi. Quaerat. Sequi veritatis consequatur
            exercitationem placeat aliquid vero minima quod vitae cumque,
            inventore iure voluptas cupiditate voluptatum incidunt ab dolor
            modi, nobis repellendus ullam? Ea voluptates ipsum accusantium
            delectus, voluptatem nostrum. Iure, vero nihil. Magni enim cumque
            repudiandae consectetur nemo totam autem consequatur soluta
            obcaecati sit incidunt reiciendis aperiam, amet quibusdam
            accusantium. Quasi ab nihil eveniet asperiores qui aliquid
            architecto voluptatibus?'
        video='video/sample.mp4'
      />
      <LeftV
        h3='Module2-Heading3'
        p=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            harum laudantium, necessitatibus beatae eaque ipsam illum molestiae
            laborum commodi enim explicabo dicta doloribus nulla aspernatur quae
            architecto asperiores sequi. Quaerat. Sequi veritatis consequatur
            exercitationem placeat aliquid vero minima quod vitae cumque,
            inventore iure voluptas cupiditate voluptatum incidunt ab dolor
            modi, nobis repellendus ullam? Ea voluptates ipsum accusantium
            delectus, voluptatem nostrum. Iure, vero nihil. Magni enim cumque
            repudiandae consectetur nemo totam autem consequatur soluta
            obcaecati sit incidunt reiciendis aperiam, amet quibusdam
            accusantium. Quasi ab nihil eveniet asperiores qui aliquid
            architecto voluptatibus?'
        video='video/sample.mp4'
      />
      <div id='module3' className='bg-[#B5B5B5] py-24 text-center'>
        <h2 className='font-bold text-6xl pb-4'>Module3</h2>
        <p className='font-medium text-lg font-serif'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          suscipit maiores deleniti iusto
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
