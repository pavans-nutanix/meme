import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
import './reactCanvas.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class ReactCanvas extends React.Component {

  constructor(){
    super();
    this.image = new Image();    
    this.ctx = null;
  }

  drawText = (text,y)=>{
    let currentX = (this.props.width/2) ;
    this.ctx.textAlign = "center"; 
    this.ctx.fillText(text,currentX,y);
    this.ctx.strokeText(text,currentX,y);
  }
 
  redrawCanvas = ()=>{
    this.ctx.font = "30px Baloo Da";
    //this.ctx.fillStyle = 'white';
    this.image.src = this.props.selectedImage;
    
    this.image.onload=()=>{
      this.ctx.drawImage(this.image,0,0, this.props.width, this.props.height);
      this.drawText('Padubidri Bridge',40);
      this.ctx.font = this.props.topFontSize + "px Baloo Da";
      this.ctx.fillStyle = this.props.colorTop;
      this.drawText(this.props.topText,80);
      this.ctx.font = this.props.bottomFontSize + "px Baloo Da";
      this.ctx.fillStyle = this.props.colorBottom;
      this.drawText(this.props.bottomText,120);
    }
  }

  componentDidMount(){
    this.refs.canvas.width = this.props.width;
    this.refs.canvas.height = this.props.height;
    this.ctx = this.refs.canvas.getContext('2d');

    this.redrawCanvas();
  }
  
  componentDidUpdate(){
    this.redrawCanvas();
  }

  render() {
    let link = '';
    if(this.refs.canvas !== undefined && this.props.isSaved){
      const img = this.refs.canvas.toDataURL("image/jpeg", 1.0);
      link = document.createElement('a');
      link.download = "memeGeneratorImage.png";
      link.href = img;
      link.click();
      this.props.saveImage(img);
      this.props.showHistoryConfirmation();
    }
    console.log('dsssdsd', this.refs.canvas);
    return (
      <div>
        <canvas ref="canvas"  />
        {
          this.refs.canvas !== undefined &&
          <div>
            <FacebookShareButton
            url='https://www.facebook.com/'
            imageURL={this.refs.canvas.toDataURL("image/jpeg", 1.0)}
            quote="Steve Jobs"
            className="m-2">
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            url='https://twitter.com/'
            title='{title}'
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
          </div>
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    saveImage: (image) => dispatch(actions.saveImage(image)),
    showHistoryConfirmation: () => dispatch(actions.showHistorySave())
  }
}

export default connect(null,mapDispatchToProps)(ReactCanvas);
