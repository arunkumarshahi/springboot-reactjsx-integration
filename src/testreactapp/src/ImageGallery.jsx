import  React, { Component } from  'react';
import  '../node_modules/bulma/css/bulma.css';
import  './App.css';
import {
    PopupboxManager,
    PopupboxContainer
} from  'react-popupbox';
import  '../node_modules/react-popupbox/dist/react-popupbox.css'
import Gallery from 'react-grid-gallery';
class  ImageGallery  extends  Component {
    constructor(){
        super();
        this.state  = {
            isOpen:  false,
            sections: [],
            bigmapSection:[],
            current:  null,
            dataRoute:  "http://localhost/index.php/wp-json/sections/v1/post"
        }
    }
    get  scaledSections(){
        var  nbr  = (this.state.sections.length/3)
            .toString()
            .split('.');
        var  sections  = [];
        console.log("..sections ..",this.state.sections)
        return  sections;
    }
    componentDidMount(){
        fetch(this.state.dataRoute)
            .then(res  =>  res.json())
            .then(sections  =>  this.setState((prevState, props) => {
                console.log("sections....in response ..",sections)
                return { bigmapSection:sections.map(this.bigmapSection),
                    sections:  sections.map(this.mapSection),
                    };
            }));
    }  
    mapSection(section){
      
        return {
            img:  section.acf.image,
            src:  section.acf.image.url,
            title:  section.post_title,
            key:  section.post_title,
            thumbnail:section.acf.image.url,
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            caption: section.post_title,
            thumbnailCaption: section.post_title,
            description:  section.post_content,
            author: {
                name:  section.acf.author_name,
                link:  section.acf.author_link
            }
        }
    }
    
    bigmapSection(section){
      
        return {
            img:  section.acf.image,
            src:  section.acf.image.url,
            title:  section.post_title,
            key:  section.post_title,
            thumbnail:section.acf.image.url,
            thumbnailWidth: 10,
            thumbnailHeight: 2,
            caption: section.post_title,
            thumbnailCaption: section.post_title,
            description:  section.post_content,
            author: {
                name:  section.acf.author_name,
                link:  section.acf.author_link
            }
        }
    }
    render() {
        
        return (
       
 <div  > 
     
     {/* <Gallery images={this.state.sections} className="img-thumbnail"/> 
     <div className="fullWidth"> Another full image text ... </div>
     <Gallery images={this.state.bigmapSection}/> */}
     {this.state.sections.map((section)=>{
    return <div className="column"><img src={section.thumbnail} alt="Logo" className="img-thumbnail" />
    <span className="caption"> {section.caption}</span>
    </div>
     })}
      </div>
                
        
       
        )
}
}
export  default  ImageGallery;