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
import Input from '../../components/Input/Input';

import './Main.css'

import image1 from '../../assets/img/sad.jpg';
import image2 from '../../assets/img/mad.jpg';
import image3 from '../../assets/img/fry.jpg';
import image4 from '../../assets/img/jobs.jpg';
import image5 from '../../assets/img/phone.jpg';
import image6 from '../../assets/img/wonka.jpg';
import image7 from '../../assets/img/padubidri.jpeg';


import Images from '../../components/Images/Images';
import ReactCanvas from '../../components/Canvas/reactCanvas';
import CustomizationForm from '../../components/CustomizationForm/CustomizationForm'
import Button from '../../components/Button/Button';
import Info from '../../components/Info/Info';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import ConfirmationScreen from '../../components/ConfirmationScreen/ConfirmationScreen';

const imageCol = [image7];

class MainComponent extends React.Component {

  render(){

    let main = (
    <div className = 'visualization'>
    <Input
      name = 'Name'
      position = 'Top'
      type = 'input'
      val = {this.props.topText}
      change = {(event)=>this.props.changeTopText(event.target.value)} 
      delete = {()=>this.props.changeTopText('')}
      description = 'Name'
    />
    <Input
      name = 'Address'
      position = 'Bottom'
      type = 'input'
      val = {this.props.bottomText}
      delete = {()=>this.props.changeBottomText('')}
      change = {(event)=>this.props.changeBottomText(event.target.value)}
      description = 'Address'
    />
     <ReactCanvas 
      width = '400'
      height = '400'
      bottomText = {this.props.bottomText}
      topText = {this.props.topText}
      topFontSize = {this.props.topFontSize}
      bottomFontSize = {this.props.bottomFontSize}
      colorBottom = {this.props.colorBottom}
      colorTop = {this.props.colorTop}
      selectedImage = {this.props.selectedImage}
      isSaved = {this.props.isSaved}
    />
    <CustomizationForm/>
    <ConfirmationScreen/>
    <Button 
    type = 'success' 
    click = {this.props.saveImageRequest}>
      Download!</Button>
    </div>
    );
    
    if(this.props.selectedImage === null){
      main = <Info/>
    }

    return (
      <main>
          <Images imageArray = {imageCol}/>
          {main}
      </main>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    saveImageRequest: () => dispatch(actions.saveImageRequest()),
    changeTopText: (text)=> dispatch(actions.changeTopText(text)),
    changeBottomText: (text)=>dispatch(actions.changeBottomText(text))
  }
}

const mapStateToProps = state =>{
  return{
    topText: state.topText,
    bottomText: state.bottomText,
    selectedImage: state.image,
    colorTop: state.colorTop,
    colorBottom: state.colorBottom,
    topFontSize: state.sizeTop,
    bottomFontSize: state.sizeBottom,
    isSaved: state.saveImage,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent);
