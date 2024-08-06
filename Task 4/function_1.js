/*Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
 ●	Input: timePoints = ["23:59","00:00"]
 Output: 1
 ●	Input: timePoints = ["00:00","23:59","00:00"]
 Output: 0 */

 console.log("Output :",MinDifference(["23:59", "00:00"])); 
 console.log("Output :",MinDifference(["00:00", "23:59", "00:00"]));

 function MinDifference(timePoints) {
    let minutes = timePoints.map(time => {
        let [hours, mins] = time.split(":").map(Number);
        return hours * 60 + mins;
    });
    
    
    minutes.sort((a, b) => a - b);
    
    let minDiff = 24 * 60;
    
    for (let i = 1; i < minutes.length; i++) {
        minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
    }
    
   
    minDiff = Math.min(minDiff, 24 * 60 - (minutes[minutes.length - 1] - minutes[0]));
    
    return minDiff;
}



