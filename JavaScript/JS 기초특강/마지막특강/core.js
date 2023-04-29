class Component {
  constructor(props) {
    this.props = props;
  }

  // state는 데이터!
  setState(newState) {
    this.state = newState;
    this.updater();
  }

  // 데이터가 바뀌면 새로 그려주는애
  updater() {
    const rendered = this.render();
    this.lastRendered.replaceWith(rendered);
    this.lastRendered = rendered;
  }

  // 요소 element를 만들어주는애
  render() {}

  initialize() {
    const rendered = this.render();
    this.lastRendered = rendered;
    return rendered;
  }
}

export default Component;
