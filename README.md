# My Photo

A simple Node.js app to upload and display photos.

## Setup
1. Clone the repo: `git clone https://github.com/your-username/my-photo.git`
2. Install dependencies: `npm install`
3. Run locally: `node index.js`
4. Access at `http://localhost:3000`

## Docker
- Build: `docker build -t my-photo:latest .`
- Run: `docker run -p 3000:3000 -v "%cd%/uploads:/app/uploads" my-photo:latest`

## AWS Deployment
- EC2 instance with Docker and Docker Compose.
- Security group allows ports 22, 80, 3000.
- GitHub Actions deploys to EC2 on push to `main`.

## CI/CD
- GitHub Actions pipeline in `.github/workflows/deploy.yml`.
- Builds, tests, and deploys to Docker Hub and EC2.

## Troubleshooting
- **App not accessible**: Check EC2 security group for port 3000.
- **Docker push fails**: Verify Docker Hub credentials in GitHub secrets.
- **Container fails**: Check logs with `docker logs my-photo`.
