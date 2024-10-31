function calcRemainder() {
    let len = document.getElementById("length").value;
    let breadth = document.getElementById("breadth").value;
    let number = document.getElementById("number").value;
    
    if (len != "" && breadth != "" && number != "") {
        let area = parseFloat(len) * parseFloat(breadth);
        let perimeter = 2  * (parseFloat(len) + parseFloat(breadth));
        let lenResult = len % number;
        let breadthResult = breadth % number;
        let areaResult = area % number;
        let perimeterResult = perimeter % number;
        let dim  =((parseFloat(len) /9.0).toFixed(2)) + " X " + ((parseFloat(breadth) / 9.0).toFixed(2));

        document.getElementById("lenResult").innerText = lenResult;
        document.getElementById("breadthResult").innerText = breadthResult;
        document.getElementById("areaResult").innerText = areaResult;
        document.getElementById("perimeterResult").innerText = perimeterResult;
        document.getElementById("dimensions").innerText = dim;


    }

}