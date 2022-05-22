import Test from './test';
import UseContext from './Context';

const Index = () => {
  return (
    <div>
      <UseContext>
        <Test />
      </UseContext>
    </div>
  );
};

export default Index;
