exports.getContactUs = (req, res, next) => {
    res.render('contactus', {
        pageTitle: 'Contact Us',
        path: '/contactus',
        activeShop: true,
        productCSS: true
    });
}

exports.success = (req, res, next) => {
    res.render('success', {
        pageTitle: 'Success',
        path: '/success',
        activeShop: true,
        productCSS: true
    });
}