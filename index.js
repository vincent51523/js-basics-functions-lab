function distanceFromHqInBlocks(street) {
    return Math.abs( street - 42)
} 
function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264
}
function distanceTravelledInFeet(x, y) {
    return Math.abs(y - x) * 264
}
function calculatesFarePrice(start, destination) {
    let flatfair = 25
    let feet = distanceTravelledInFeet(start, destination);
    if (feet < 400) {
    return 0 
    } else if (2000 < feet && feet< 2500) {
    return flatfair
    } else if (400 < feet && feet < 2000){
        return (feet - 400)* 0.02
    } else if (feet > 2000 && feet < 2500) {
        return 25
    }
    else { 
        return 'cannot travel that far'
    }
    
    
}