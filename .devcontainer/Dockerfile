# ビルド後にUbuntuを初めて使用するとき、必ず
# docker compose build と
# docker compose up -d を
# 実行してください

FROM ubuntu:22.04

# Ubuntuをアップデート
RUN apt update
RUN apt -y upgrade
# Packageをインストール、ビルドするためのシステムをインストールする
RUN apt install -y build-essential
RUN apt install -y software-properties-common
RUN apt install -y curl sudo

# hiroto99というユーザーを作成
RUN useradd -m hiroto99
# hiroto99というユーザーに、root権限を与える
RUN gpasswd -a hiroto99 sudo
# パスワードはhiroto99に設定
RUN echo 'hiroto99:hiroto99' | chpasswd
RUN sudo sed -i 's/hoge:x:1000:1000::\/home\/hoge:\/bin\/sh/hoge:x:1000:1000::\/home\/hoge:\/bin\/bash/g' /etc/passwd

# sshするための設定（公式サイト参考）
RUN apt install -y openssh-server
RUN mkdir /var/run/sshd
RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
# SSHにログインした後、強制ログアウトされた場合に再度ログインする
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd
ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile
EXPOSE 22

### <-- システムの追加設定 ～～インストール～～ -->

# Bashのインストール
RUN sudo apt-get update
RUN sudo apt-get -y install bash
CMD ["/bin/bash"]

# Pythonのインストール
RUN sudo apt update
RUN sudo apt zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev libbz2-dev
RUN wget https://www.python.org/ftp/python/3.9.1/Python-3.9.1.tgz
RUN tar -xf Python-3.9.1.tgz
RUN cd Python-3.9.1
RUN ./configure --enable-optimizations
RUN make -j 12
RUN sudo make altinstall
RUN python3.9 --version