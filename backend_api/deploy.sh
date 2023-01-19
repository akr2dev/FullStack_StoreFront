#!/bin/bash

eb init $EB_APPLICATION_NAME -p "Node.js 16 running on 64bit Amazon Linux 2" --region $AWS_DEFAULT_REGION

eb deploy $EB_ENVIRONMENT