import React, { Component } from 'react';

class CSS extends Component {
    render() {
        return (
            <div className='main-div'>
                <div className='box-model'>
                    <h3>This Is a Box</h3>                    
                </div>
                <div className='text'>
                    <h3 id='text-title'>Here Is Some Text</h3> 
                </div>
                <input disabled placeholder='this should be disabled' type='text' className='dissabled'/>
                <h1>Boxes</h1>
                <div className='boxes-div'>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                </div>
                <div className='lorem'> 
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


                
            </div>
        );
    }
}

export default CSS;