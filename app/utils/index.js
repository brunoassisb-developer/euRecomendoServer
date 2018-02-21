
module.exports = {
  respond,
  respondOrRedirect
};

function respond (res, tpl, obj, status) {
  res.format({
    html: () => res.render(tpl, obj),
    json: () => {
      if (status) return res.status(status).json(obj);
      res.json(obj);
    }
  });
}

function respondOrRedirect (resp = { req, res }, url = '/', obj = {}, flash) {
  resp.res.format({
    html: () => {
      if (resp.req && flash) resp.req.flash(flash.type, flash.text);
      resp.res.redirect(url);
    },
    json: () => resp.res.json(obj)
  });
}
