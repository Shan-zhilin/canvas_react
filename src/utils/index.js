// 使用创建webgl程序
export const linkWebGl = ({v_shader,f_shader,gl,}) => {

    //创建顶点着色器
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, v_shader);
    gl.compileShader(vertexShader);
    
    //创建片元着色器
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, f_shader);
    gl.compileShader(fragmentShader);

    // 创建webgl程序
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    //使用webgl程序
    gl.useProgram(program);

};
