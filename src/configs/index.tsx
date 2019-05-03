import ProdConfig from './production';
import DevConfig from './development';

let Config = DevConfig;
if(process.env.NODE_ENV == 'production') Config = ProdConfig;

export default Config;