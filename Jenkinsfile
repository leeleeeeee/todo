pipeline {
    agent any
     tools {
        nodejs "node18"
    }
    
    stages {
        
        stage('github-clone') {
            steps {
                git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/leeleeeeee/todo.git'
            }
        }

        stage('Prepare pnpm') {
            steps {
                // NodeJS 및 pnpm 설정
                sh 'node -v'
                sh 'corepack enable'
                sh 'corepack prepare pnpm@latest-9 --activate'
            }
        }

        stage('lint') {
            steps {
                sh 'pnpm install'
                sh 'pnpm lint'
            }
        }
        
   		// stage...
   	}
}