class Homepage {

    get pageHeader() { return $('//*[@id="fwhomepagehero"]/div/div[1]/div/div[1]/h1') }
    get subHeading() { return $('//section/div/div/div/div/div/p') }
    get freeTrial() { return $('//*[@id="fwhomepagehero"]/div/div[1]/div/div[1]/div/div/a[1]') }

}


module.exports = new Homepage();