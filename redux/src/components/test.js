const FetchData = () => {
  return async () => {
    await console.log('First Async');

    const sendData = async () => {
      await console.log('Second Async');
    };
    try {
      await sendData();
    } catch (err) {
      console.log(err);
    }
  };
};

FetchData();
