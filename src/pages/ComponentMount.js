export default function mountFunction(state, dataRef) {
  dataRef.on('value', snapshot => {
    const dataList = [];
    const questionList = [];

    const dataObject = snapshot.val();
    let i = 3;
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in dataObject) {
      const singleeObj = {};
      if (i <= 0) {
        singleeObj.judge_id = key;
        singleeObj.score = '?';
        console.log('?');
        questionList.push(singleeObj);
      } else {
        singleeObj.judge_id = key;
        singleeObj.score = dataObject[key];
        console.log(dataObject[key]);
        dataList.push(singleeObj);
      }
      // eslint-disable-next-line no-plusplus
      i--;
    }
    return () =>
      state.setState({
        data: dataList,
        question: questionList,
      });
  });
}
