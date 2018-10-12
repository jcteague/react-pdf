import Base from './Base';
const SVGtoPDF = require('svg-to-pdfkit');
// import svgson from 'svgson-next';
// import { fetchImage } from '../utils/image';

class Svg extends Base {
  get name() {
    return 'Svg';
  }
  clone() {
    const clone = super.clone();
    clone.image = this.image;
    return clone;
  }

  getAbsoluteLayout() {
    const parent = this.parent;
    const parentLayout =
      parent && parent.getAbsoluteLayout
        ? parent.getAbsoluteLayout()
        : { left: 0, top: 0 };

    return {
      left: this.left + parentLayout.left,
      top: this.top + parentLayout.top,
      height: this.height,
      width: this.width,
    };
  }
  async render() {
    console.log('svg render');
    // console.log(this.props);
    // const svg = svgson(this.props.content);
    const doc = this.root.instance;
    const layout = this.getAbsoluteLayout();
    SVGtoPDF(doc, this.props.content, layout.left, layout.top);
    if (this.props.debug) {
      this.debug();
    }
    this.root.instance.restore();
  }
}

export default Svg;
