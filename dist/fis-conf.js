var project = 'main/dist'; 
 fis
    // 排除指定目录
    .set('project.ignore', ['node_modules/**', '.gitignore', '**/**.scss'])
    .match(/package.json/,{
        release:false
    })
    .match(/fis-conf.js/,{
        release:false
    });

fis.media('td')
    .match('*',{
        deploy: [
            fis.plugin('http-push', {
                receiver: 'http://182.254.215.228:9099/receiver.php',
                to: '/mydata/cdn-static/m-static/' + project
            })
        ]
    });