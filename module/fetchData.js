let dataArray = []
async function fetchData() {
    try {
        let data = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
        let response = await data.json();
        return response
    }
    catch (error) {
        alert(error);
    }
}

dataArray.push(await fetchData())

export { dataArray }