import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import PlaceDetail from './PlaceDetail';

const PlaceDetails = () => {
    const placeLoadData=useLoaderData();
    const {PlaceDetails}=useParams();

    const singlePlaceDetails=[];
    const findPlaceData = placeLoadData.find(data => data.id === PlaceDetails);
    singlePlaceDetails.push(findPlaceData)

  return (
    <div>
        <div>
            {singlePlaceDetails.map((detail)=><PlaceDetail key={detail.id} detail={detail} />)}
        </div>
    </div>
  )
}

export default PlaceDetails