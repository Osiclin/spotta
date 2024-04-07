import { useState } from 'react';

export default function useAmenities() {
    const [amenities, setAmenities] = useState({
        selectedAmenities: [],
        availableAmenities: [
            'Parking Lot', 'Free Wi-Fi', 'Pet Store',
            'Nightlife', 'Hospitals', 'Childcare', 'Adult Home',
            'Gym', 'Schools', 'Security'
        ],
    });

    const selectAmenities = (isSelected, amenity) => {
        setAmenities({
            ...amenities,
            selectedAmenities: isSelected ?
                [...amenities.selectedAmenities, amenity] :
                amenities.selectedAmenities.filter((item) => item !== amenity)
        })
    };

    return { amenities, selectAmenities };
}
