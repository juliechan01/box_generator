import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ColorBoxForm = () => {
    const [color, setColor] = useState('');
    const [boxes, setBoxes] = useState([]);
    const [size, setSize] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (color.trim() !== '' && size.trim() !== '') {
            const boxSize = parseInt(size.trim(), 10);
            if(!isNaN(boxSize)) {
                setBoxes((prevBoxes) => [...prevBoxes, {color: color.trim(), size: boxSize}]);
                setColor('');
                setSize('');
            }
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='form'>
                <div className='row mb-3'>
                    <label className='col-sm-1 col-form-label'> Color:
                    </label>
                    <div className='col-sm-2'>
                        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className='form-control' />
                    </div>
                </div>

                <div className='row mb-3'>
                    <label className='col-sm-1 col-form-label'> Size (px):
                    </label>
                    <div className='col-sm-2'>
                        <input type="number" value={size} onChange={(e) => setSize(e.target.value)} className='form-control'/>
                    </div>
                </div>
                <div className='col-sm-5'>
                    <button type="submit" className='btn btn-outline-info'>Add Box</button>
                </div>
            </form>
        <div className='button'>
        {boxes.map((box, index) => (
            <div key={index} style={{ backgroundColor: box.color, width: `${box.size}px`, height: `${box.size}px`,margin: '10px',
            }}
        />
        ))}
        </div>
    </div>);
};

export default ColorBoxForm;