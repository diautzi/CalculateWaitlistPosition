const calculatePosition = (position, daysWaiting, numberOfReferrals) => {
    if (numberOfReferrals == 0 && daysWaiting === 0) {
         position;
    }  
    else {
        if (numberOfReferrals > 0) {
            position = position - Math.round(1000/numberOfReferrals);
            numberOfReferrals -= 1;
        }
        if ( daysWaiting > 0) {
            position = position - Math.round(0.0143 * position)
            daysWaiting -= 1 ;
        }    
        return calculatePosition(position, daysWaiting, numberOfReferrals)
    }
    return position
}

module.exports = calculatePosition;