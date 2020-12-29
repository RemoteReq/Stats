module.exports = {
  apps : [{
    name: 'RemoteReq Stats',
    script: './server/server.js',
  }],
  deploy : {
    production : {
      key  : '/home/ryden/.ssh/Heavy-Storm.pem',
      user : 'ubuntu',
      host : '3.139.68.111',
      ref  : 'origin/master',
      repo : 'git@github.com:RemoteReq/Stats.git',
      path : '/home/ubuntu/',
      'pre-deploy-local': "echo 'beginning production deployment'",
      'post-setup': 'npm --version,',
      'post-deploy' : 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  }
};
