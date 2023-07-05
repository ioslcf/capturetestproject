import logo from './logo.svg';
import './App.css';
import { Upload } from 'antd';

function App() {
  const props = {
    beforeUpload: (file) => {
      console.log('beforeUpload file = ', file)
    },
    customRequest: options => {
      console.log('customRequest options = ', options)
    },
    multiple: true,
    showUploadList: false,
    accept: 'image/*',
    capture: 'user'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Upload {...props}>
          <p>
            打开相机
          </p>
        </Upload>
      </header>
    </div>
  );
}

export default App;
