const classy = () => Class => {
    const _Class = (...rest) => new Class(...rest);
    _Class.prototype = Class.prototype;
    return _Class;
};

export default classy;