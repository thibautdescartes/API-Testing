const databaseGetButton = document.getElementById('databaseGetButton');
const reset = document.getElementById('reset');

databaseGetButton.onclick = function() {
    databaseGetButton.style.display = 'none';
    document.getElementById('buttonTest').style.color = 'green';
    
    const request = new XMLHttpRequest();

    /*You might need to change the second argument here to something else depending on how your files are set up...
      Also, I'm using Django here as my server so your url outputs might be different than mine.
      The second request that I have commented out doesn't work because you can't load local resources in chrome using scripts for
      security reasons.

      Here is a fix that seems pretty simple: https://stackoverflow.com/questions/34901523/file-url-not-allowed-to-load-local-resource-in-the-internet-browser/35014520
    */
   
    request.open('GET', 'apiRequest.json');
    //request.open('GET', 'file:///C:/Users/Thibaut/apiRequest.json');
    request.send();
    request.onreadystatechange = () => {
        console.log(request);
        if (request.status === 200) {
            const backendOutput = request.response;
            document.getElementById('outputFromBackend').innerHTML = `${backendOutput}`;
        } else {
            const backendOutput = `error ${request.status} ${request.statusText}`;
            document.getElementById('outputFromBackend').innerHTML = `${backendOutput}`;
        }
    }
}

reset.onclick = function() {
    databaseGetButton.style.display = 'block';
    document.getElementById('buttonTest').style.color = 'black';
    document.getElementById('outputFromBackend').innerHTML = 'The output from the backend should appear here.';
}
