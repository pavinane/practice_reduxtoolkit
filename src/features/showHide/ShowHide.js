import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { displayImage ,DisplayShowImage} from './showHideSlice';

function ShowHide() {
    
  // There are two way we can use show state from store and slice file

    // const display = useSelector((state) => state.displayData.show)
    const display = useSelector(DisplayShowImage)


    const dispatch = useDispatch();
   
    const handleShow =() => {
        dispatch(displayImage())
    }

  return (
    <div>
        <button type="button" onClick={handleShow}>
            {display ? "Hide" : 'Show'}
        </button>

        {display && (
              <>
                  <img src="https://cdn.pixabay.com/photo/2023/02/08/02/40/iron-man-7775599_960_720.jpg" alt="" />
              </>
          ) 
        }

    </div>
  )
}

export default ShowHide