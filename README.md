# app0003

这是一个用reacrt native+android+koa+mongodb开发的一款安卓健康信息记录APP。  
使用夜神模拟器进行操作  
项目前端与后台代码开源在GitHub上面  
由于本项目后台是在搭建本地计算机上，数据库也就建立在本地上  

使用前提：  

需要配置好Android的原生开发环境，react-native官网即有，还需要下载安装夜神模拟器，将其设置为默认模拟器  

演示视频：  

https://pan.baidu.com/s/14WM9Vf6uqfMHpCZh-2DjCw 提取码：1234

使用方法：  

先启动本地的mongodb服务：  
1、打开命令窗口，切换到mongodb安装目录下的“bin”目录中  
2、启动服务。输入命令：mongod --dbpath F:\MongoDB\data   
注：--dbpath是指定数据库存放目录，要注意dbpath前有两个“-”。  

打开本地服务文件夹（app003-sever）  
yarn 安装配置文件  
node app.js 启动服务  

打开夜神模拟器，打开项目文件夹（app003）  
yarn 安装配置文件  
yarn Android 启动项目   
（项目中获取数据的路径，如fetch('http:// 192.168.124.10:1234/u/list')，里面的IP地址要跟换为本地的IP，可以通过ipconfig/all查看，ipv4的首选地址即为所需地址）
