#!/usr/bin/env bash
# Lowers the resolution of webp images to 50px (width or height) tops
for img in *.webp; do
    convert "$img" "-resize" "50x50>" "$img"
done