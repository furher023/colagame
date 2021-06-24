function status(startDate,duration=4200000){
        var current = new Date();
        var time = startDate.getTime()+duration;
        var endtime = new Date(time);
        if(current > endtime )
        return false;
        else return true;

}