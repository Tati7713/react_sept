import {Simpson} from "./components/Simpson/Simpson";
import {Characters} from "./components/Characters/Characters";

const App = () => {
  return (
      <div>
        <Simpson name={'Homer'} surname = {'Simpson'} image = {'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
        <Simpson name={'Marge'} surname = {'Simpson'} image = {'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
        <Simpson name={'Bart'} surname = {'Simpson'} image = {'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
        <Simpson name={'Lisa'} surname = {'Simpson'} image = {'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>
        <Simpson name={'Maggie'} surname = {'Simpson'} image = {'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}/>

        <Characters/>
      </div>
  );
};

export {App};
