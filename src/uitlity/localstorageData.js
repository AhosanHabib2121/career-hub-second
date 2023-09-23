// get data from local storage
const getDataFromLocalStorage = () => {
    const getDataL = localStorage.getItem('appliedData');
    if (getDataL) {
        return JSON.parse(getDataL);
    }
    return [];
}
// save data in local storage
const saveDataLs = (id) => {
    const storedData = getDataFromLocalStorage();
    const isExists = storedData.find(singleData => singleData === id);
    if(!isExists){
        storedData.push(id);
        const dataSave = JSON.stringify(storedData);
        localStorage.setItem('appliedData', dataSave);
    }
    
    
}



export {getDataFromLocalStorage,saveDataLs}