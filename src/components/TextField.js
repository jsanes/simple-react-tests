class TextField extends React.Component {
  render() {
    const { value, onChange, ...rest } = this.props;

    return <input {...rest} type="text" value={value} onChange={onChange} />;
  }
}
