const tripTime = (arr) => {
    let result = {
        avgSpeedLimits: [], 
        segmentTimes: [], 
        totalTime: null
    }

    for (let i = 0; i < arr.length; i++) {
        let speedLimits = arr[i].speedLimits;
        let avgSpeed = 0;
        let distance = 0;
        let time = 0;
        for (j = 0; j < speedLimits.length; j++) {
            let curDist = speedLimits[j].distance;
            let curSpeed = speedLimits[j].speedLimit;
            // let weighted = (1/curDist) / (1/ )
            // time += curDist / curSpeed;
            // distance += curDist;
            // avgSpeed += distance / time;
        }
        let segmentTime = distance / avgSpeed;
        result.avgSpeedLimits.push(avgSpeed);
        result.segmentTimes.push(segmentTime);
        // time = distance / speed
    }

    // calculate the total time by adding all the segment times
    let total = 0;
    for (let k = 0; k < result.segmentTimes.length; k++) {
        total += result.segmentTimes[k];
    }
    result.totalTime = total;

    return result
}

// UNCOMMENT THE FUNCTION CALL AT
// THE BOTTOM BEFORE RUNNING THE FILE


const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 

]


console.log(tripTime(stops));
