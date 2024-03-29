const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = err.errors[0].message;
    res.status(400).json({ msg: err.errors[0].message });

    const error = {
      status,
      message,
    };
    // console.log(error.issues)
    // console.log(error.errors[0].message)
    next(error);
  }
};

module.exports = validate;
