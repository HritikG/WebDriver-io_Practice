class Homepage {

    get pageHeader() {return $('//*[@id="fwhomepagehero"]/div/div[1]/div/div[1]/h1')}
    get subHeading(){return $('//section/div/div/div/div/div/p')}
    get demo(){return $('//ul/a[1]/span')}

}


module.exports = new Homepage();