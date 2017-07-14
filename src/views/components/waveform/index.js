import React from 'react';
import request from 'superagent';


class Waveform extends React.Component {
  static propTypes = {
    onReady: React.PropTypes.func.isRequired,
    url: React.PropTypes.string.isRequired,
    isCompact: React.PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.loadData();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.url !== this.props.url;
  }

  componentWillUpdate() {
    this.removeCanvas();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if (this.request) this.request.abort();

    this.request = request
      .get(this.props.url)
      .end((error, response) => {
        if (!error) this.renderCanvas(response.body);
      });
  }

  removeCanvas() {
    let canvas = this.containerEl.firstChild;
    if (canvas) this.containerEl.removeChild(canvas);
  }

  renderCanvas(data) {
    let offsetWidth = this.containerEl.offsetWidth;
    console.log('offsetWidth',offsetWidth);
    const { isCompact } = this.props;
    let canvas = document.createElement('canvas');
    canvas.height = data.height / 2; // 70px;
    canvas.width = data.width / 2;   // 900px

    let context = canvas.getContext('2d');
    context.fillStyle = 'rgba(0, 0, 0, 0.5)';

    let samples = data.samples,
        l = samples.length,
        skipWidth = 0,
        width = 0,
        i = 0,
        x = 0,
        v;
    if (isCompact) {

    }else{
      skipWidth = 4
      width = 3
    }
    skipWidth = 3
    width = 2
    for (; i < l; i += 2, x+=skipWidth) {
      v = samples[i] / 5;
      // console.log('v',v)
      if(isCompact){
        context.fillStyle = 'rgba(255, 255, 255, 0.5)';
      }else{
        context.fillStyle = 'rgba(0, 0, 0, 0.5)';
      }
      context.fillRect(x, v, width, 40.5 - v);

      context.fillStyle = 'rgba(0, 0, 0, 0.3)';
      context.fillRect(x, 41, width, 29.5 - v);
    }

    this.containerEl.appendChild(canvas);
    this.props.onReady();
  }

  render() {
    return <div className="waveform" ref={e => this.containerEl = e} />;
  }
}

export default Waveform;
