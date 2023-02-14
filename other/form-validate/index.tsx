import React, { useRef, useState } from 'react';
const reg = /[\u4e00-\u9fa5]/gm;

const Test = () => {
  const [nameError, setNameError] = useState<string>();
  const [descError, setDescError] = useState<string>();
  const [sexError, setSexError] = useState<string>();
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      desc: { value: string };
      sex: { value: string };
    };
    const name = target.name.value;
    const desc = target.desc.value;
    const sex = target.sex.value;
    let nameFlag = false;
    let descFlag = !desc;
    let sexFlag = !sex;
    if (reg.test(name)) {
      setNameError('不能输入中文');
      nameFlag = true;
    } else {
      setNameError(!name ? '请填写名称' : '');
      nameFlag = !name;
    }
    setDescError(!desc ? '请填写描述' : '');
    setSexError(!sex ? '请填写性别' : '');
    if (nameFlag) {
      document.getElementById('name')?.scrollIntoView();
      return;
    }
    if (descFlag) {
      document.getElementById('desc')?.scrollIntoView();
      return;
    }
    if (sexFlag) {
      document.getElementById('sex')?.scrollIntoView();
      return;
    }
  };
  return (
    <div>
      <form ref={formRef} onSubmit={onSubmit}>
        <div id="name" style={{ height: '200px' }}>
          <label>姓名</label>
          <input type="text" name="name" />
          <div>{nameError}</div>
        </div>
        <div id="desc" style={{ height: '200px' }}>
          <label>描述</label>
          <input type="text" name="desc" />
          <div>{descError}</div>
        </div>
        <div id="sex" style={{ height: '200px' }}>
          <label>性别</label>
          <input type="radio" name="sex" value="男" />
          <label>男</label>
          <input type="radio" name="sex" value="女" />
          <label>女</label>
          <div>{sexError}</div>
        </div>
        <div>
          <button type="submit">提交</button>
        </div>
      </form>
    </div>
  );
};
export default Test;
