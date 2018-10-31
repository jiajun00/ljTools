/*
 * 动态加载js文件
 * @param string path js文件路径
 * @param funciong callback 回调方法(返回参数true和false)
 */
function loadScript(path, callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  const head = document.head;
  const error = () => {
    script.onload = script.onreadystatechange = script.onerror = null;
    head.removeChild(script);
    callback(false);
  }
  const success = () => {
    script.onload = script.onreadystatechange = script.onerror = null;
    head.removeChild(script);
    callback(true);
  }
  script.onreadystatechange = function () {
    if (this.readyState == "loaded" || this.readyState == "complete") {
      success();
    }
  };
  script.onload = success;
  script.onerror = error;
  script.src = path;
  head.appendChild(script);
}

exports.loadScript = loadScript;
exports.__esModule = true;


