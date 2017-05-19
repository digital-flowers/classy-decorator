const classy = () => Class =>{
    const _Class = () => new Class();
    _Class.prototype = Class.prototype;
    return _Class;
};

export default classy;